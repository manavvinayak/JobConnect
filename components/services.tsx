
export  function Services() {
    return (
         <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Web Development"
                className="mx-auto mb-4 w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Build stunning websites and web applications.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic Design"
                className="mx-auto mb-4 w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-600">Create captivating visuals for your brand.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1666299356749-5f7422b52e87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Content Writing"
                className="mx-auto mb-4 w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Content Writing</h3>
              <p className="text-gray-600">Engaging content that drives results.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Marketing"
                className="mx-auto mb-4 w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Boost your online presence and reach.</p>
            </div>
          </div>
        </div>
    )
}