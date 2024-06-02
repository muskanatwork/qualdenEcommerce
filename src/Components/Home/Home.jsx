import ProduntCard from "./ProductCard"
const Home = () => {
    const ProductCartArr = [1,2,3,4,5,5,4,3,3,3,2,2]
    return (
        <>
        <div className="container">
        <div className="box1"></div>
            <div className="productCartContainer">
                {
                    ProductCartArr.map((item,index)=>{
                        return(
                            <ProduntCard key={index}/>
                        )
                    })
                }
            </div>
            <div className="box3"></div>
            </div>
        </>
    )
}

export default Home