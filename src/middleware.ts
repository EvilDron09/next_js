import {NextRequest, NextResponse} from "next/server";

export const middleware = async(request: NextRequest) =>{
    console.log('middleware');

    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');
    //
    // let token = await fetch('',{
    //     method: 'POST',
    //     headers:{
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         key1:login,
    //         key2:password,
    //     })
    //
    // })
    //     .then(value => value.json());

    const token = 'iijh1jhej2iu3892789udijkasd';

    const response = NextResponse.next({
        headers:{
            Authorization: token
        }
    });
    return response;

    if(local === 'EN'){
        fetch//content;
    }

    return new NextResponse('ashdgfsahg', {headers: {'xxx': 'yyyy'}});

    if(request.url.startsWith("/api")){
        some action
    } else if( request.url.startsWith("/swapi"))

}

export const config = {
    matcher: '/auth',
}
