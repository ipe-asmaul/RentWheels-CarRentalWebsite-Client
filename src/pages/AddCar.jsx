import React from 'react';

const AddCar = () => {
    return (
        <div>
            <div className="add-car flex w-full flex-col items-center justify-center bg-linear-to-bl from-orange-100 to-white p-15">
                <h3 className="text-3xl font-bold text-secondary mb-6">Add New Car</h3>
                <form className=' w-fit h-fit p-10 border-2 border-primary space-y-2.5 rounded-xl shadow-2xl'>
                    <div className="name">

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Car Name</legend>
                            <input type="name" className="input w-full" placeholder="Enter Car Name" name='name' />
                        </fieldset>
                    </div>
                    <div className="description">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Car Description</legend>
                            <textarea className="textarea h-24" placeholder="Description" name='description'></textarea>
                        </fieldset>
                    </div>
                    <div className="category">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Pick a Car Model</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Hatchback</option>
                                <option>Luxury</option>
                                <option>Electric</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="ext">
                        <div className="rent-per-day">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Rent (per day)</legend>
                                <input type="number" className="input" placeholder="Rent" name='rent' />
                            </fieldset>
                        </div>
                        <div className="location">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Location</legend>
                                <input type="text" className="input" placeholder="Add Your Location" name='location' />
                            </fieldset>
                        </div>
                    </div>
                    <div className="image">
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </g>
                            </svg>
                            <input
                                type="url"
                                required
                                placeholder="Enter Image Url"

                            />
                        </label>
                        <p className="validator-hint">Must be valid URL</p>

                    </div>
                    <div className="user-info space-y-1.5">
                        <p className='text-sm'>Personal Info</p>

                        <div className="email">
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" defaultValue="mail@site.com" required readOnly />
                            </label>
                        </div>
                        <div className="name">
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    defaultValue={'Jhon Doe'}
                                    readOnly
                                />
                            </label>


                        </div>
                    </div>
                    <input type="submit" value="Add Car" className='btn btn-primary w-full' />
                </form>

            </div>
        </div>
    );
};

export default AddCar;