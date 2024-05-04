import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {items.map((menuItem) => {
        const { id, title, category, img, price, desc } = menuItem;
        return (
          <div key={id} className="grid grid-cols-2 w-[550px]">
            <div className="">
              <img
                className="h-[200px] w-[250px] border-4 border-solid border-[#c59d5f]"
                src={img}
                alt={title}
              />
            </div>
            <div className="flex flex-col">
              <div className='font-mono flex justify-between border-b-4 mb-5'>
                <h4 className="text-lg text-zinc-700">{title}</h4>
                <h4 className="text-[#c59d5f]">{price}</h4>
              </div>
              <div>
                <p className="font-sans text-slate-500">{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
