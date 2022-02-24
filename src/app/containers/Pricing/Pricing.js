import { Container } from '@mui/material'
import Cards from './Cards'
import highpurchases from './highpurchases'

import purchases from './purchases'

const Pricing = () => {
    return (
        <div>
            <Container className=" mt-3  " style={{}}>
                <div
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{
                        display: 'flex',

                        flexDirection: 'row',
                        gap: '3rem',
                        //     marginTop: '5rem',
                    }}
                    className=""
                >
                    {purchases.map((emojiTerm) => (
                        <Cards
                            key={emojiTerm.id}
                            type={emojiTerm.type}
                            money={emojiTerm.money}
                            meaning1={emojiTerm.meaning1}
                            meaning2={emojiTerm.meaning2}
                            meaning3={emojiTerm.meaning3}
                        />
                    ))}
                </div>
            </Container>
            <Container className="mt-3  " style={{}}>
                <div
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{
                        display: 'flex',

                        flexDirection: 'row',
                        gap: '3rem',
                        //     marginTop: '5rem',
                    }}
                    className=""
                >
                    {highpurchases.map((highEmojiTerm) => (
                        <Cards
                            key={highEmojiTerm.id}
                            type={highEmojiTerm.type}
                            money={highEmojiTerm.money}
                            meaning1={highEmojiTerm.meaning1}
                            meaning2={highEmojiTerm.meaning2}
                            meaning3={highEmojiTerm.meaning3}
                        />
                    ))}
                </div>
            </Container>
        </div>
        //   {/* <Container
        //       className="d-flex mt-3 justify-content-between"
        //       style={{}}
        //   >
        //       <Grid item lg={4} md={4} sm={12} xs={12}>
        //           <Card
        //               sx={{ px: 5, py: 2, mb: 3 }}
        //               style={{ height: '300px', width: '300px' }}
        //           >
        //               hi
        //           </Card>
        //       </Grid>
        //       <Grid item lg={4} md={4} sm={12} xs={12}>
        //           <Card
        //               sx={{ px: 5, py: 2, mb: 3 }}
        //               style={{ height: '300px', width: '300px' }}
        //           ></Card>
        //       </Grid>
        //       <Grid item lg={4} md={4} sm={12} xs={12}>
        //           <Card
        //               sx={{ px: 5, py: 2, mb: 3 }}
        //               style={{ height: '300px', width: '300px' }}
        //           ></Card>
        //       </Grid>
        //   </Container> */}
    )
}

export default Pricing
