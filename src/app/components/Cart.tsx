import React from 'react'
import styles from './Cart.module.scss'
import Image from 'next/image'
import Input from './Input'
async function getCart() {
    const res = await fetch('https://fakestoreapi.com/carts/5')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const Cart = async () => {
    const cart = await getCart()
    console.log(cart);

    return (
        <>
            <div className={styles.cartContainer}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>UNIT PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Image
                                    src="delete.svg"
                                    alt="My SVG"
                                    width={23}
                                    height={22}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/cartProductImage.png"
                                    alt="My SVG"
                                    width={137}
                                    height={94}
                                />
                                <span>Nike Airmax 270 react</span>
                            </td>
                            <td>$383</td>
                            <td>
                                <div className={styles.count}>
                                    <span className={styles.minus}>-</span><span>2</span><span className={styles.plus}>+</span>
                                </div>
                            </td>

                            <td>$383</td>
                        </tr>
                        <tr>
                            <td>
                                <Image
                                    src="delete.svg"
                                    alt="My SVG"
                                    width={23}
                                    height={22}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/cart_item_2.png"
                                    alt="My SVG"
                                    width={137}
                                    height={94}
                                />
                                <span>Nike Airmax 270 react</span>
                            </td>
                            <td>$265</td>
                            <td>
                                <div className={styles.count}>
                                    <span className={styles.minus}>-</span><span>2</span><span className={styles.plus}>+</span>
                                </div>
                            </td>
                            <td>$486</td>
                        </tr>
                    </tbody>
                </table>
            </div >
            <div className={styles.voucherAndTotal}>
                <div>
                    <Input input_width="300px" input_height="45px" placeholder="Voucher Code" button_text="Redeem" button_width="118px" />
                </div>
                <div className={styles.finalPrice}>
                    <div className={styles.totalPrice}>
                        <h4>Subtotal</h4>
                        <h4>$998</h4>
                    </div>
                    <div className={styles.totalPrice}>
                        <h4>Shipping fee</h4>
                        <h4>$998</h4>
                    </div>
                    <div className={styles.totalPrice}>
                        <h4>Coupon</h4>
                        <h4>$998</h4>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.totalPrice}>
                        <h3>Total</h3>
                        <h3>$998</h3>
                    </div>
                    <div className={styles.checkout}>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart