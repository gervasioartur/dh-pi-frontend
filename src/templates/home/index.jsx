import './styles.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Slide from "../../components/layout/slide"
import CardContainer from '../../components/CardContainer'

//api
import api from '../../services/api'



function Home() {
    const [products, setProdutos] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/products', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
            .then(response => setProdutos(response.data.products))
    }, [token])


    return (
        <section className='b-content'>
            <Slide />
            <div className='container'>
                <h4>Destaque</h4>
                {products.length == 0 ? (
                    <h1>Sem produtos cadastrados</h1>
                ) : (
                    <CardContainer cards={products} />
                )}

            </div>

        </section>
    )
}
export default Home
