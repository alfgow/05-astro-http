import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export const prerender = false;

//! EndPoint GET ⬇️
export const GET: APIRoute = async ({params, request}) => {

    const {slug} = params;

    const post = await getEntry('blog', slug as any);

    if (!post) {
        return new Response(
                JSON.stringify({msg: `Post whit id ${slug} not found`}),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
    }

    return new Response(
        JSON.stringify(post),
        {
            status: 200, 
            headers: {
                        'Content-Type': 'application/json',
                    }
        }
    );
}

//! EndPoint POST ⬇️
export const POST: APIRoute = async ({request}) => {
    const body = await request.json()
    return new Response(

        JSON.stringify(
            {
                method: 'POST',
                ...body,
            }
        ),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

//! EndPoint PUT ⬇️
export const PUT: APIRoute = async ({request}) => {
    const body = await request.json()
    return new Response(

        JSON.stringify(
            {
                method: 'PUT',
                ...body,
            }
        ),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

//! EndPoint PATCH ⬇️
export const PATCH: APIRoute = async ({request}) => {
    const body = await request.json()
    return new Response(

        JSON.stringify(
            {
                method: 'PATCH',
                ...body,
            }
        ),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

//! EndPoint DELETE ⬇️
export const DELETE: APIRoute = async ({params,request}) => {
    const {slug} = params;
    return new Response(

        JSON.stringify(
            {
                method: 'DELETE',
                slug: slug,
            }
        ),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}