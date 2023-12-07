import { memo } from "react";
import { Link } from "react-router-dom"

 function ModuleCard(props) {
  const { image, children, path } = props;

  return (
    <Link      
      to={path}
      className="rounded-lg bg-[#343e42] py-7 shadow-lg hover:bg-[#495255]"
    >
      <figure className="flex flex-col items-center">
        {image}
        <figcaption className="text-center font-semibold pt-4 text-[#b8bcc1]">{children}</figcaption>
      </figure>
    </Link>
  )
}

export default memo(ModuleCard)