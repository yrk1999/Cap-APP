namespace library;

entity Books {
    key ID        : Integer;
        title     : String;
        author    : String;
        completed : Boolean;
        genre     : Association to Genres;
}

entity Stationary {
    key ID    : Integer;
        name  : String;
        price : Decimal @assert.range: [
            0,
            10000
        ];
}

entity Genres {
    key ID   : Integer;
        name : String;
}
