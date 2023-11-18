export default function SectionHeader({mainHeader, subHeader}){
    return (
        <>
        <div className="mb-6 text-center">
            <h1 className="font-semibold text-gray-500 uppercase">{subHeader}</h1>
            <h1 className="text-4xl italic font-bold leading-5 text-primary">{mainHeader}</h1>
        </div>
        </>
    );
}