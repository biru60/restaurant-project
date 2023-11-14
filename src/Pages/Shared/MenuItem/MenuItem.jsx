

const MenuItem = ({menu}) => {
    const {name,recipe,image,price}=menu
    return (
        <div className="flex gap-4 ">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-28 h-24" src={image} alt="" />
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm">{recipe}</p>
            </div>
            <p className="text-yellow-600 text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;