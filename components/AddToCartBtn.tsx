
type AddToCartBtnProps = {
  btnStyles: string;
  title?: string;
  icon?: React.ReactNode;
}

export const AddToCartBtn = ({ btnStyles, title, icon }: AddToCartBtnProps) => {
  return (
    <button className={`${btnStyles}`}>
      {icon} {title}
    </button>
  )
}
