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
package io.gravitee.rest.api.repository.proxy;

import io.gravitee.common.data.domain.Page;
import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.api.PromotionRepository;
import io.gravitee.repository.management.api.search.Pageable;
import io.gravitee.repository.management.api.search.PromotionCriteria;
import io.gravitee.repository.management.api.search.Sortable;
import io.gravitee.repository.management.model.Promotion;
import java.util.Optional;
import org.springframework.stereotype.Component;

@Component
public class PromotionRepositoryProxy extends AbstractProxy<PromotionRepository> implements PromotionRepository {

    @Override
    public Optional<Promotion> findById(String id) throws TechnicalException {
        return target.findById(id);
    }

    @Override
    public Promotion create(Promotion item) throws TechnicalException {
        return target.create(item);
    }

    @Override
    public Promotion update(Promotion item) throws TechnicalException {
        return target.update(item);
    }

    @Override
    public void delete(String id) throws TechnicalException {
        target.delete(id);
    }

    @Override
    public Page<Promotion> search(PromotionCriteria criteria, Sortable sortable, Pageable pageable) throws TechnicalException {
        return target.search(criteria, sortable, pageable);
    }
}
