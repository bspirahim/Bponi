import React, { useEffect, useState } from 'react';


const Product1 = () => {
    const [products, setProducts] = useState([])
    const [modalData, setmodalData] = useState([])
    

    

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(item => item.category === 'salad');
                setProducts(salad);
            })
    }, [])

    const loadModal = (id) => {
        console.log(id);
        const found = products.find(element => element._id == id);
        setmodalData(found);
        window.my_modal_4.showModal(id)
    }

    console.log(products);
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.map(item =>
                        <>
                            <div className="card w-auto bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title">{item.price}T</h2>

                                    
                                    <p onClick={() => loadModal(item._id)}>
                                        {item.name}
                                    </p>
                                    <p>1.2</p>
                                    <div className="card-actions p-0 w-full">
                                        <button className="btn w-full font-bold text-2xl">+</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">{modalData.name}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Product1;