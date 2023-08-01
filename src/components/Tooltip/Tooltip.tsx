/** @jsxImportSource preact */
import styles from "./Tooltip.module.css"



export type Props = {
  description: string,
  children: string,
}

const Tooltip = ({ description, children }: Props) => {

  description = description

  return (
    <span class={styles.tooltip} description={description}>{children}</span>
  )
}

export default Tooltip

