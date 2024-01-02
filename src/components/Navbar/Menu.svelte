<script>
	/**
	 * @type {any[]}
	 */
	export let navlists = [];

	function signIn() {
		goto('auth/login');
	}
</script>

<nav class="bg-[#cfded8] ">
	<div class="mx-auto   sm:px-6 lg:px-8">
	  <div class="relative flex h-16 items-center ">
		<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
		  <!-- Mobile menu button-->
		  <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
			<span class="absolute -inset-0.5"></span>
			<span class="sr-only">Open main menu</span>
			<!--
			  Icon when menu is closed.
  
			  Menu open: "hidden", Menu closed: "block"
			-->
			<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
			<!--
			  Icon when menu is open.
  
			  Menu open: "block", Menu closed: "hidden"
			-->
			<svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		  </button>
		</div>
		<div class="flex flex-shrink-0 items-center">
			<img class="h-12 w-auto" src="images/logo.png" alt="Your Company">
		  </div>
		  <a href="/" class=" rounded-md px-0 py-0 text-base font-bold text-gray-900 " aria-current="page"> PAULA ULLOA D. IMPLANTES Y REHABILITACIÓN</a> 
		<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">

		  <div class="hidden sm:ml-6 sm:block">
			<div class="flex space-x-4">
			  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
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
					  href="#implante"
					  data-te-dropdown-item-ref
					  >Implantología</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#estetica"
					  data-te-dropdown-item-ref
					  >Estetica</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#terceros"
					  data-te-dropdown-item-ref
					  >Terceros Molares</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#blanqueamiento"
					  data-te-dropdown-item-ref
					  >Blanquemiento</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#ortodoncia"
					  data-te-dropdown-item-ref
					  >Ortodoncia</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#endodoncia"
					  data-te-dropdown-item-ref
					  >Endodoncia</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#cirugia"
					  data-te-dropdown-item-ref
					  >Cirugía Oral</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#limpieza"
					  data-te-dropdown-item-ref
					  >Limpieza dental</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="#esteticaf"
					  data-te-dropdown-item-ref
					  >Estetica Facial</a
					>
				  </li>
				</ul>
			  </div>
			
			 <!--  End Lista de tratamientos  -->  
			  {#each navlists as list}
			        <a href="{list.url}" class=" text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"> {list.label}</a> 
		      {/each}

			 <!--  Lista de Opcional  -->     
			<div class="relative" data-te-dropdown-ref>
				<button
				  class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  px-3 py-5 flex items-center text-sm uppercase font-bold leading-snug 
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
				  Opciones
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
					  href="https://drapaulaulloa.dentalink.cl"
					  data-te-dropdown-item-ref
					  >Agenda</a
					>
				  </li>
				  <li>
					<a
					  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
					  href="https://draclinica.herokuapp.com"
					  data-te-dropdown-item-ref
					  >Laboratorio</a
					>
				  </li>
				</ul>
			  </div>
			 <!-- END Lista de Opcional  --> 
			</div>
		  </div>
		</div>
		<!--
		<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
		  <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
			<span class="absolute -inset-1.5"></span>
			<span class="sr-only">View notifications</span>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
			</svg>
		  </button>
  
		 Profile dropdown 
		  <div class="relative ml-3">
			<div>
			  <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
				<span class="absolute -inset-1.5"></span>
				<span class="sr-only">Open user menu</span>
				<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
			  </button>
			</div>
		  </div> 
		
		</div>
		-->
	  </div>
	</div>
  
	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
	  <div class="space-y-1 px-2 pb-3 pt-2">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
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
						  href="#implante"
						  data-te-dropdown-item-ref
						  >Implantología</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#estetica"
						  data-te-dropdown-item-ref
						  >Estetica</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#terceros"
						  data-te-dropdown-item-ref
						  >Terceros Molares</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#blanqueamiento"
						  data-te-dropdown-item-ref
						  >Blanquemiento</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#ortodoncia"
						  data-te-dropdown-item-ref
						  >Ortodoncia</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#endodoncia"
						  data-te-dropdown-item-ref
						  >Endodoncia</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#cirugia"
						  data-te-dropdown-item-ref
						  >Cirugía Oral</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#limpieza"
						  data-te-dropdown-item-ref
						  >Limpieza dental</a
						>
					  </li>
					  <li>
						<a
						  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
						  href="#esteticaf"
						  data-te-dropdown-item-ref
						  >Estetica Facial</a
						>
					  </li>
					</ul>
				  </div>
			 <!--  End Lista de tratamientos  -->  
		{#each navlists as list}
		<a href="{list.url}" class=" text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"> {list.label}</a> 
         {/each}

		 			 <!--  Lista de Opcional  -->     
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
						  Opciones
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
							  href="https://drapaulaulloa.dentalink.cl"
							  data-te-dropdown-item-ref
							  >Agenda</a
							>
						  </li>
						  <li>
							<a
							  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
							  href="https://draclinica.herokuapp.com"
							  data-te-dropdown-item-ref
							  >Laboratorio</a
							>
						  </li>
						</ul>
					  </div>
					 <!-- END Lista de Opcional  --> 
	  </div>
	</div>
  </nav>


<nav class="hidden uppercase text-gray-800 pg sm:block">
	<div class="lg:flex lg:flex-grow items-center hidden" id="example-collapse-navbar">
			<ul class="flex flex-col lg:flex-row list-none lg:ml-auto left-14">
			<!--  Lsita de tratamientos  -->     
<!--
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
			-->
			 <!--  End Lista de tratamientos  -->           

			<li>
				<!--
				<a
					class="px-3 py-6 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
					href="/auth/login"
				>
					<i class="fas fa-user text-lg leading-lg text-white opacity-75" /> Conectar
				</a>
				 <a class="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="https://ff.healthatom.io/45V2HY">Agenda sin Costo</a>
				<div class="flex text-sm">
				  <a class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="#">Sign up</a>
				</div> -->
			</li>

		</ul>
	</div>

</nav>


