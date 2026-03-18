using library from '../db/schema';

service TaskService {

    entity Books      as
        projection on library.Books {
            *,
            genre
        }
        actions {
            action markComplete();
        };

    entity Genres     as projection on library.Genres;
    entity Stationary as projection on library.Stationary;
}
