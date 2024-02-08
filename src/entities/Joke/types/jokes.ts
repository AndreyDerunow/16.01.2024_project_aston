export interface Joke extends Result {
    icon_url: string;
    url: string;
}

export interface QueryedJoke extends Joke {
    categories: string[];
    created_at: string;
    updated_at: string;
}

export interface QueryAnswer {
    result: Result[];
    total?: number;
}

export interface Result {
    value: string;
    id: string;
    url: string;
    categories: string[];
}
