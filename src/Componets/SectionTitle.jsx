

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center mt-10">
           <p className=" text-yellow-600 ">---{subHeading}---</p> 
           <h2 className="text-2xl font-medium border-y-4 my-4 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;