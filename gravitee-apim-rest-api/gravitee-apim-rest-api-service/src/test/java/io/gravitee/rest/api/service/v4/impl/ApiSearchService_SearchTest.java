/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.rest.api.service.v4.impl;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.gravitee.common.data.domain.Page;
import io.gravitee.definition.model.DefinitionVersion;
import io.gravitee.repository.management.api.ApiRepository;
import io.gravitee.repository.management.api.search.ApiCriteria;
import io.gravitee.repository.management.api.search.ApiFieldFilter;
import io.gravitee.repository.management.api.search.builder.PageableBuilder;
import io.gravitee.repository.management.api.search.builder.SortableBuilder;
import io.gravitee.repository.management.model.Api;
import io.gravitee.repository.management.model.LifecycleState;
import io.gravitee.rest.api.model.common.PageableImpl;
import io.gravitee.rest.api.model.common.SortableImpl;
import io.gravitee.rest.api.model.v4.api.ApiEntity;
import io.gravitee.rest.api.model.v4.api.GenericApiEntity;
import io.gravitee.rest.api.service.*;
import io.gravitee.rest.api.service.common.GraviteeContext;
import io.gravitee.rest.api.service.converter.ApiConverter;
import io.gravitee.rest.api.service.impl.search.SearchResult;
import io.gravitee.rest.api.service.search.SearchEngineService;
import io.gravitee.rest.api.service.search.query.QueryBuilder;
import io.gravitee.rest.api.service.v4.*;
import io.gravitee.rest.api.service.v4.PlanService;
import io.gravitee.rest.api.service.v4.mapper.ApiMapper;
import io.gravitee.rest.api.service.v4.mapper.CategoryMapper;
import io.gravitee.rest.api.service.v4.mapper.GenericApiMapper;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

@RunWith(MockitoJUnitRunner.class)
public class ApiSearchService_SearchTest {

    private final String USER_ID = "user-1";

    @Mock
    private ApiRepository apiRepository;

    @Mock
    private SearchEngineService searchEngineService;

    @Mock
    private CategoryService categoryService;

    @Mock
    private PrimaryOwnerService primaryOwnerService;

    // ApiMapper injections
    @Mock
    private PlanService planService;

    @Mock
    private FlowService flowService;

    @Mock
    private ParameterService parameterService;

    @Mock
    private WorkflowService workflowService;

    @Mock
    private ApiAuthorizationService apiAuthorizationService;

    private ApiSearchService apiSearchService;

    @AfterClass
    public static void cleanSecurityContextHolder() {
        // reset authentication to avoid side effect during test executions.
        SecurityContextHolder.setContext(
            new SecurityContext() {
                @Override
                public Authentication getAuthentication() {
                    return null;
                }

                @Override
                public void setAuthentication(Authentication authentication) {}
            }
        );
    }

    @Before
    public void setUp() {
        ApiMapper apiMapper = new ApiMapper(
            new ObjectMapper(),
            planService,
            flowService,
            parameterService,
            workflowService,
            new CategoryMapper(categoryService)
        );
        apiSearchService =
            new ApiSearchServiceImpl(
                apiRepository,
                apiMapper,
                new GenericApiMapper(apiMapper, new ApiConverter()),
                primaryOwnerService,
                categoryService,
                searchEngineService,
                apiAuthorizationService
            );
    }

    @Test
    public void should_return_empty_page_if_no_results() {
        QueryBuilder<ApiEntity> apiEntityQueryBuilder = QueryBuilder.create(ApiEntity.class);
        apiEntityQueryBuilder.setQuery("*");

        var ids = List.of("id-1", "id-2");

        var filters = new HashMap<String, Object>();
        filters.put("api", ids);

        when(searchEngineService.search(eq(GraviteeContext.getExecutionContext()), eq(apiEntityQueryBuilder.setFilters(filters).build())))
            .thenReturn(new SearchResult(List.of()));

        final Page<GenericApiEntity> apis = apiSearchService.search(
            GraviteeContext.getExecutionContext(),
            eq("UnitTests"),
            eq(true),
            apiEntityQueryBuilder.setFilters(filters),
            new PageableImpl(1, 10),
            null
        );

        assertThat(apis).isNotNull();
        assertThat(apis.getContent().size()).isEqualTo(0);
        assertThat(apis.getTotalElements()).isEqualTo(0);
        assertThat(apis.getPageNumber()).isEqualTo(0);
        assertThat(apis.getPageElements()).isEqualTo(0);

        verify(apiAuthorizationService, never()).findApiIdsByUserId(any(), any(), any());
        verify(apiRepository, never()).search(any(), any(), any(), any());
    }

    @Test
    public void should_return_page_of_api_entity_if_no_ids_found() {
        QueryBuilder<ApiEntity> apiEntityQueryBuilder = QueryBuilder.create(ApiEntity.class);
        apiEntityQueryBuilder.setQuery("*");

        var ids = List.of("id-1", "id-2");

        var filters = new HashMap<String, Object>();
        filters.put("api", ids);

        when(searchEngineService.search(eq(GraviteeContext.getExecutionContext()), eq(apiEntityQueryBuilder.setFilters(filters).build())))
            .thenReturn(new SearchResult(ids));

        var apiEntity1 = new Api();
        apiEntity1.setId("id-1");
        apiEntity1.setLifecycleState(LifecycleState.STARTED);

        var apiEntity2 = new Api();
        apiEntity2.setId("id-2");
        apiEntity2.setLifecycleState(LifecycleState.STARTED);

        when(
            apiRepository.search(
                eq(new ApiCriteria.Builder().environmentId(GraviteeContext.getExecutionContext().getEnvironmentId()).ids(ids).build()),
                isNull(),
                eq(new PageableBuilder().pageNumber(0).pageSize(10).build()),
                eq(ApiFieldFilter.allFields())
            )
        )
            .thenReturn(new Page<>(List.of(), 0, 0, 0));

        final Page<GenericApiEntity> apis = apiSearchService.search(
            GraviteeContext.getExecutionContext(),
            USER_ID,
            true,
            apiEntityQueryBuilder.setFilters(filters),
            new PageableImpl(1, 10),
            null
        );

        assertThat(apis).isNotNull();
        assertThat(apis.getContent().size()).isEqualTo(0);
        assertThat(apis.getTotalElements()).isEqualTo(0);
        assertThat(apis.getPageNumber()).isEqualTo(0);
        assertThat(apis.getPageElements()).isEqualTo(0);

        verify(apiAuthorizationService, never()).findApiIdsByUserId(any(), any(), any());
        verify(apiRepository, times(1)).search(any(), any(), any(), any());
    }

    @Test
    public void should_return_page_of_api_entity_if_ids_found() {
        QueryBuilder<ApiEntity> apiEntityQueryBuilder = QueryBuilder.create(ApiEntity.class);
        apiEntityQueryBuilder.setQuery("*");

        var ids = List.of("id-1", "id-2");

        var filters = new HashMap<String, Object>();
        filters.put("api", ids);

        when(searchEngineService.search(eq(GraviteeContext.getExecutionContext()), eq(apiEntityQueryBuilder.setFilters(filters).build())))
            .thenReturn(new SearchResult(ids));

        var apiEntity1 = new Api();
        apiEntity1.setId("id-1");
        apiEntity1.setLifecycleState(LifecycleState.STARTED);

        var apiEntity2 = new Api();
        apiEntity2.setId("id-2");
        apiEntity2.setLifecycleState(LifecycleState.STARTED);

        when(
            apiRepository.search(
                eq(new ApiCriteria.Builder().environmentId(GraviteeContext.getExecutionContext().getEnvironmentId()).ids(ids).build()),
                eq(new SortableBuilder().field("createdAt").setAsc(false).build()),
                eq(new PageableBuilder().pageNumber(0).pageSize(10).build()),
                eq(ApiFieldFilter.allFields())
            )
        )
            .thenReturn(new Page<>(List.of(apiEntity1, apiEntity2), 1, 2, 2));

        final Page<GenericApiEntity> apis = apiSearchService.search(
            GraviteeContext.getExecutionContext(),
            USER_ID,
            true,
            apiEntityQueryBuilder.setFilters(filters),
            new PageableImpl(1, 10),
            new SortableImpl("createdAt", false)
        );

        assertThat(apis).isNotNull();
        assertThat(apis.getContent().size()).isEqualTo(2);
        assertThat(apis.getTotalElements()).isEqualTo(2);
        assertThat(apis.getPageNumber()).isEqualTo(1);
        assertThat(apis.getPageElements()).isEqualTo(2);

        verify(apiAuthorizationService, never()).findApiIdsByUserId(any(), any(), any());
        verify(apiRepository, times(1)).search(any(), any(), any(), any());
    }

    @Test
    public void should_get_user_api_ids_if_not_admin() {
        QueryBuilder<ApiEntity> apiEntityQueryBuilder = QueryBuilder.create(ApiEntity.class);
        apiEntityQueryBuilder.setQuery("*");

        var ids = List.of("id-1", "id-2");

        var filters = new HashMap<String, Object>();
        filters.put("api", ids);

        when(searchEngineService.search(eq(GraviteeContext.getExecutionContext()), eq(apiEntityQueryBuilder.setFilters(filters).build())))
            .thenReturn(new SearchResult(ids));

        var apiEntity1 = new Api();
        apiEntity1.setId("id-1");
        apiEntity1.setLifecycleState(LifecycleState.STARTED);

        var apiEntity2 = new Api();
        apiEntity2.setId("id-2");
        apiEntity2.setLifecycleState(LifecycleState.STARTED);

        when(apiAuthorizationService.findApiIdsByUserId(eq(GraviteeContext.getExecutionContext()), eq(USER_ID), isNull()))
            .thenReturn(Set.of("id-1"));

        when(
            apiRepository.search(
                eq(
                    new ApiCriteria.Builder()
                        .environmentId(GraviteeContext.getExecutionContext().getEnvironmentId())
                        .ids(Set.of("id-1"))
                        .build()
                ),
                eq(new SortableBuilder().field("name").setAsc(true).build()),
                eq(new PageableBuilder().pageNumber(0).pageSize(10).build()),
                eq(ApiFieldFilter.allFields())
            )
        )
            .thenReturn(new Page<>(List.of(apiEntity1), 1, 1, 1));

        final Page<GenericApiEntity> apis = apiSearchService.search(
            GraviteeContext.getExecutionContext(),
            USER_ID,
            false,
            apiEntityQueryBuilder.setFilters(filters),
            new PageableImpl(1, 10),
            new SortableImpl("name", true)
        );

        assertThat(apis).isNotNull();
        assertThat(apis.getContent().size()).isEqualTo(1);
        assertThat(apis.getTotalElements()).isEqualTo(1);
        assertThat(apis.getPageNumber()).isEqualTo(1);
        assertThat(apis.getPageElements()).isEqualTo(1);

        verify(apiAuthorizationService, times(1)).findApiIdsByUserId(any(), any(), any());
        verify(apiRepository, times(1)).search(any(), any(), any(), any());
    }

    @Test
    public void should_return_no_results_if_user_has_no_ids() {
        QueryBuilder<ApiEntity> apiEntityQueryBuilder = QueryBuilder.create(ApiEntity.class);
        apiEntityQueryBuilder.setQuery("*");

        var ids = List.of("id-1", "id-2");

        var filters = new HashMap<String, Object>();
        filters.put("api", ids);

        when(searchEngineService.search(eq(GraviteeContext.getExecutionContext()), eq(apiEntityQueryBuilder.setFilters(filters).build())))
            .thenReturn(new SearchResult(ids));

        var apiEntity1 = new Api();
        apiEntity1.setId("id-1");
        apiEntity1.setLifecycleState(LifecycleState.STARTED);

        var apiEntity2 = new Api();
        apiEntity2.setId("id-2");
        apiEntity2.setLifecycleState(LifecycleState.STARTED);

        when(apiAuthorizationService.findApiIdsByUserId(eq(GraviteeContext.getExecutionContext()), eq(USER_ID), isNull()))
            .thenReturn(Set.of());

        final Page<GenericApiEntity> apis = apiSearchService.search(
            GraviteeContext.getExecutionContext(),
            USER_ID,
            false,
            apiEntityQueryBuilder.setFilters(filters),
            new PageableImpl(1, 10),
            null
        );

        assertThat(apis).isNotNull();
        assertThat(apis.getContent().size()).isEqualTo(0);
        assertThat(apis.getTotalElements()).isEqualTo(0);
        assertThat(apis.getPageNumber()).isEqualTo(0);
        assertThat(apis.getPageElements()).isEqualTo(0);

        verify(apiAuthorizationService, times(1)).findApiIdsByUserId(any(), any(), any());
        verify(apiRepository, never()).search(any(), any(), any(), any());
    }
}
