/*
 * Copyright © 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.repository.mongodb.management.internal.key;

import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.model.ApiKey;
import io.gravitee.repository.mongodb.management.internal.model.ApiKeyMongo;
import io.gravitee.repository.mongodb.management.internal.model.ApplicationMongo;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author GraviteeSource Team
 */
@Repository
public interface ApiKeyMongoRepository extends MongoRepository<ApiKeyMongo, String>, ApiKeyMongoRepositoryCustom {
    @Query("{ 'subscriptions': ?0 }")
    List<ApiKeyMongo> findBySubscription(String subscription);

    @Query(value = "{ 'application': ?0 }", sort = "{ 'updatedAt': -1 }")
    List<ApiKeyMongo> findByApplication(String applicationId);

    List<ApiKeyMongo> findByKey(String key);

    @Query(value = "{ environmentId: ?0 }", delete = true)
    List<ApiKeyMongo> deleteByEnvironment(String environmentId);
}
