interface HttpRequest {
    body?: any;
    headers?: any;
    params? : any;
    query? : any;
}

interface HttpResponse {
    status: number;
    message : string;
    data?: any;
}