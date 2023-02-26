import './styles.scss';

const Modal = ({active, setActive, children})=>{
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={e=>e.stopPropagation()}>
        <h5 className='albums__title'>List of albums:</h5>
        {children}
      </div>
    </div>
  )
}
export default Modal;
