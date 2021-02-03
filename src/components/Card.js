import React from 'react';
import Button from './Button'
function card({title,description,children}) {
    return (
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="mx-w-md mx-auto">
                    <div className="flex items-center space-x-5">
                        <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i
                        </div>
                        <div className="block pl-2 font-semibold text-xl self-start text-grya-700">
                        <h2 className="leading-relaxed">{title}</h2>
                        <p className="text-sm text-gray-500 font-normal leading-relax">
                           {description}
                        </p>
                    </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            {children}
                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                        <Button label="Batal" type="cancel" color="red"/>
                        <Button label="submit" type="Submit" color="blue"/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default card;