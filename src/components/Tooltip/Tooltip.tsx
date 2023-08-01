/** @jsxImportSource preact */
import styles from "./Tooltip.module.css"

export type Props = {
  description: string
  children: string
}

const Tooltip = ({ description, children }: Props) => {
  return (
    <span class={styles.tooltip} tooltip-text={description}>
      {children}
    </span>
  )
}

export default Tooltip
