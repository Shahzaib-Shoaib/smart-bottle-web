const CustomField = ({ field, errors }: any) => {
  const error = errors && errors.filter((e: any) => e.id === field.id)[0];
  const errorMessage =
    error && errors.filter((e: any) => e.id === field.id)[0].message;

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 my-3 flex flex-col  w-full mt-10 md:mt-0">
      <label className="leading-7 text-sm text-gray-600">{field.label}</label>
      {error && (
        <p className="errorMessage animate__animated animate__bounceIn mb-2 md:mb-0 md:ml-auto">
          {errorMessage}
        </p>
      )}
      <input
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black"
        {...field.input.props}
        {...field.input.state}
      />
    </div>
  );
};

export default CustomField;
