import { useState } from "react"

const useToggle = () => {

  const [toggleItem, setToggleItem] = useState(false);

  const renderToggle = () => {
    setToggleItem(prevState=>!prevState)
  }
  return[toggleItem, renderToggle]
}

export default useToggle;