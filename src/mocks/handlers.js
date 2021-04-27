import { graphql } from 'msw';

export const handlers = [
    graphql.query('getAlbums', (req, res, ctx) => {

        return res(ctx.data({
            albums: {
                data: [
                    { id: '0', title: 'title-0', user: { id: '0', username: 'username-0' } }
                ]
            }
        }))
    })
]