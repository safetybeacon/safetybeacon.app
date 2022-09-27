const footer = () => {
	return (
		<div>
			<div className='page-width block md:flex justify-between text-center md:text-left items-center my-3 text-sm'>
				<div className="my-3 md:my-0 md:flex">
					<a className='block md:mr-4' href='https://github.com/safetybeacon'>GitHub</a>
					<a className='block md:mr-4' href="https://choosealicense.com/licenses/gpl-3.0/">GNU General Public License v3.0</a>
				</div>
				<div className="my-3 md:my-0 md:flex">
					<div>&copy; TOBY SCOTT 2022</div>
				</div>
			</div>
		</div>
	)
}

export default footer


// .footer {
// 	display: flex;
// 	flex: 1;
// 	padding: 2rem 0;
// 	border-top: 1px solid #eaeaea;
// 	justify-content: center;
// 	align-items: center;
//   }
  
//   .footer a {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-grow: 1;
//   }