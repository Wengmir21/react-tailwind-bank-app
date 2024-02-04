import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ipsam atque dicta suscipit pariatur, sunt, tempora corporis exercitationem assumenda error quae optio libero minus officia quibusdam? Vero porro quaerat recusandae totam.</p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>
  </section>
)

export default CardDeal;