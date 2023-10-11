// import ArraySets from './components/ArraySets';
import ArraySets2 from './components/ArraySets2';
import Nav from './components/Nav';
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer ,
   CustomerReviews , Subscribe, Footer} from './sections';

const App = () => {

  

  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b' >
        {/* <ArraySets/> */}
        <ArraySets2/>
      </section>
      <Nav/>
      
      <section className='xl:padding-l wide:padding-r padding-b' >
       
        <Hero/>
        
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x pay-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App;