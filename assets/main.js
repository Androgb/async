const API = 'https://rickandmortyapi.com/api'

const content = null || document.getElementById('content')
const fetchData = async (urlApi) => {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function search(urlApi) {
    try {
        const send = await fetchData(`${urlApi}/character/1,2,3,4,5,6,7,8`)
        console.log(send.map(send=>send.image,send.name));
        let view = `
        ${send.map(send =>`        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="${send.image}" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${send.name} <span style="color:green">${send.status.toLowerCase()}</span></h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lives on ${send.location.name}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>`).join('')}
        `
        
        content.innerHTML = view
    } catch (error) {
        throw new Error(error)      
    }
}

search(API)