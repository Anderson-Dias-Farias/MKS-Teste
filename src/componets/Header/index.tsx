import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import vetor from '../../../public/Vector.png'
import ListCart from '../ListCart'
import { selectProducts } from '../Redux/Slice'
import AnmeLottie from './lottie'
import { CnfAnme, Contador, Container, DImgCart, DivCart, DivTitle, SubTitle, Title, Topos } from './styles'

function Header() {
    const [open, setOpen] = useState(false)
    const [animate, setAnimate ] = useState(false)
    const {Produtos} = useSelector(selectProducts)
    const Totals = Produtos.reduce((initial:Number, Elm:{Qtd:any} )=> initial  + Elm.Qtd , 0)
    const Total = (Totals.toLocaleString())


    useEffect(() => {

        setTimeout(()=>setAnimate(false), 3000)
        
    }, [animate])
    

  return (
    <Topos>
        <Container>

            <Link legacyBehavior href={"/"} >
                <DivTitle>
                    <Title>MKS</Title>
                    <SubTitle>Sistemas</SubTitle>
                </DivTitle>
            </Link>    
            <DivCart  onClick={()=> setOpen(!open)}>
                <DImgCart /*Imagem foi adicionado duas vezes pois estava carregando 
                distorcido, corrigia rapidamente mas estava me incomodando e somente
                 esta imagem com erro, esta foi a maneira de corrigir.  */>
                   <Image alt={"Icone Carrinho de Compras"}  src={vetor} width={19} height={18} />
                </DImgCart>
                <DImgCart>
                   <Image alt={"Icone Carrinho de Compras"}  src={vetor} width={10.9} height={10} />
                </DImgCart>
                <Contador>{Total}</Contador>
            </DivCart>
        </Container>
        <ListCart open={open} setOpen={setOpen} setAnimate={setAnimate} />
        <CnfAnme  animate={animate}>
                <AnmeLottie animate={animate} />
        </CnfAnme>
    </Topos>
  )
}

export default Header