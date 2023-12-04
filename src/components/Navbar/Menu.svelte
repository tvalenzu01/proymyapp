<script>
	/**
	 * @type {any[]}
	 */
	export let navlists = [];

	function signIn() {
		goto('auth/login');
	}
</script>

<nav class="hidden uppercase text-gray-800 pg sm:block">
	<div class="lg:flex lg:flex-grow items-center hidden" id="example-collapse-navbar">
			<ul class="flex flex-col lg:flex-row list-none lg:ml-auto left-14">
			<!--  Lsita de tratamientos  -->     

			<div class="relative" data-te-dropdown-ref>
				<button
				  class="px-3 py-5 flex items-center text-sm uppercase font-bold leading-snug 
				  hover:opacity-75 hover:no-underline flex items-center whitespace-nowrap rounded  px-4 pb-2 pt-4 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
				   hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-[#cfded8]
				    focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
					 focus:outline-none focus:ring-0 active:bg-[#cfded8] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				  type="button"
				  id="dropdownMenuButton1"
				  data-te-dropdown-toggle-ref
				  aria-expanded="false"
				  data-te-ripple-init
				  data-te-ripple-color="light">
				  Tratamientos
				  <span class="ml-2 w-2">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  viewBox="0 0 20 20"
					  fill="currentColor"
					  class="h-5 w-5">
					  <path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd" />
					</svg>
				  </span>
				</button>
				<ul
				  class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
				  aria-labelledby="dropdownMenuButton1"
				  data-te-dropdown-menu-ref>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href=""
					  data-te-dropdown-item-ref
					  >Implantología</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#"
					  data-te-dropdown-item-ref
					  >Endodoncia</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#"
					  data-te-dropdown-item-ref
					  >Ortodoncia</a
					>
				  </li>
				</ul>
			  </div>

			 <!--  End Lista de tratamientos  -->           
			{#each navlists as list}
				<li class="relative">
				
				  <button
						class="px-5 py-3.5 flex items-center text-sm uppercase font-bold leading-snug btn-sm bg-[#cfded8]  flex text-gray-800 items-center text-sm uppercase font-bold leading-snug hover:opacity-75 hover:no-underline"
						onclick="window.location.href='{list.url}';"
					>
						{list.label}
					</button>

				</li>
			{/each}
			<li>
				<a
					class="px-3 py-6 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
					href="/auth/login"
				>
					<i class="fas fa-user text-lg leading-lg text-white opacity-75" /> Conectar
				</a>
				<!-- <a class="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="https://ff.healthatom.io/45V2HY">Agenda sin Costo</a>
				<div class="flex text-sm">
				  <a class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="#">Sign up</a>
				</div> -->
			</li>

		</ul>
	</div>

</nav>


