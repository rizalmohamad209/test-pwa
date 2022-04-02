import React from 'react'
import Location from '../components/location';
import SectionTitle from '../components/section-title';
import Widget from '../components/widget';
import { useForm } from 'react-hook-form';
import Alert from '../components/alerts';
import Modal3 from '../components/modals/modal-3';
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const DaftarSekolah = ({ alerts }) => {

    const { handleSubmit, errors, register } = useForm()
    const onSubmitFn = data => {
        if (onSubmit) {
            onSubmit(data)
        }
    }

    let items = [
        {
            label: 'Pilihan 1',
            error: {
                required: 'Pilihan Sekolah Wajib DI isi',
                validate: (value) =>
                    ['SMPN1 Slawi', 'SMPN 2 Slawi', 'SMPN 3 Slawi'].includes(value) ||
                    'Pilihan Sekolah Wajib DI isi'
            },
            name: 'country',
            type: 'select',
            options: [
                { value: null, label: '--Pilih Sekolah' },
                { value: 'SMPN1 Slawi', label: 'SMPN1 Slawi' },
                { value: 'SMPN 2 Slawi', label: 'SMPN 2 Slawi' },
                { value: 'SMPN 3 Slawi', label: 'SMPN 3 Slawi' }
            ]
        },
        {
            label: 'Pilihan 2',
            error: {
                required: 'Pilihan Sekolah Wajib DI isi',
                validate: (value) =>
                    ['SMPN1 Slawi', 'SMPN 2 Slawi', 'SMPN 3 Slawi'].includes(value) ||
                    'Pilihan Sekolah Wajib DI isi'
            },
            name: 'country',
            type: 'select',
            options: [
                { value: null, label: '--Pilih Sekolah' },
                { value: 'SMPN1 Slawi', label: 'SMPN1 Slawi' },
                { value: 'SMPN 2 Slawi', label: 'SMPN 2 Slawi' },
                { value: 'SMPN 3 Slawi', label: 'SMPN 3 Slawi' }
            ]
        },
        {
            label: 'Pilihan 2',
            error: {
                required: 'Pilihan Sekolah Wajib DI isi',
                validate: (value) =>
                    ['SMPN1 Slawi', 'SMPN 2 Slawi', 'SMPN 3 Slawi'].includes(value) ||
                    'Pilihan Sekolah Wajib DI isi'
            },
            name: 'country',
            type: 'select',
            options: [
                { value: null, label: '--Pilih Sekolah' },
                { value: 'SMPN1 Slawi', label: 'USA' },
                { value: 'SMPN 2 Slawi', label: 'SMPN 2 Slawi' },
                { value: 'SMPN 3 Slawi', label: 'Australia' }
            ]
        },
    ]
    items = items.map(item => {
        item['ref'] = register(item['error'])
        return item
    })
    return (
        <>

            <SectionTitle title="Daftar Sekolah Berdasarkan Lokasi" />

            <Location />

            <SectionTitle title="Pilih Sekolah Pendafataran" />
            <Widget>

                <div>
                    <form
                        onSubmit={handleSubmit(onSubmitFn)}
                    >
                        {alerts &&
                            items.map((item, i) => {
                                if (!errors[item.name]) return null
                                let msg = errors[item.name].message
                                if (msg.length === 0) msg = `${item.label} is required`
                                return (
                                    <div className="flex flex-col w-full">
                                        {errors[item.name] && (
                                            <div className="mb-2" key={i}>
                                                <Alert
                                                    color="bg-transparent border-red-500 text-red-500"
                                                    borderLeft
                                                    raised>
                                                    {msg}
                                                </Alert>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        <div className="grid xl:grid-cols-3 xl:gap-6">
                            {items.map((item, i) => {


                                if (item.type === 'select') {
                                    return (
                                        <div className="form-element">
                                            {item.label && <div className="form-label">{item.label}</div>}
                                            <select
                                                ref={item.ref}
                                                name={item.name}
                                                className={`bg-gray-50 shadow-sm outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-select mt-1 block w-full ${errors[item.name] ? 'border border-red-500' : ''
                                                    }`}>
                                                {item.options.map((option, j) => (
                                                    <option key={j} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {!alerts && errors[item.name] && (
                                                <div className="form-error">{errors[item.name].message}</div>
                                            )}
                                        </div>
                                    )
                                }


                            })}
                        </div>



                        <Link to="/test">

                            <button
                                type="submit"
                                class="text-white block mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Daftar
                            </button>
                        </Link>
                    </form>
                </div>
            </Widget>


            {/*            <SectionTitle title="List Daftar Sekolah" />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">

                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-sm title-font font-bold">SMPN 1 Slawi</h2>
                                    <p className="text-gray-500 text-xs">Negeri - 20338380</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}


        </>
    )
}

export default DaftarSekolah