import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

const Signup = () => {
	const [input, setInput] = useState({
		email: '',
		password: '',
		phone: '',
		username: '',
		confirmpassword: ''
	})

	const [errors, setErrors] = useState({
		email: '',
		password: '',
		phone: '',
		username: '',
		confirmpassword: ''
	})

	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const [loading, setLoading] = useState(false)

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const phoneRegex = /^[0-9]{9,11}$/

	const validateField = (name: string, value: string) => {
		let error = ''

		switch (name) {
			case 'email':
				if (!value) error = 'Email is required'
				else if (!emailRegex.test(value)) error = 'Invalid email format'
				break
			case 'password':
				if (!value) error = 'Password is required'
				break
			case 'confirmpassword':
				if (!value) error = 'Confirm Password is required'
				else if (value !== input.password) error = 'Passwords do not match'
				break
			case 'username':
				if (!value) error = 'Username is required'
				break
			case 'phone':
				if (!value) error = 'Phone is required'
				else if (!phoneRegex.test(value)) error = 'Invalid phone number'
				break
		}
		return error
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const error = validateField(name, value)
		setErrors((prev) => ({ ...prev, [name]: error }))
	}

	const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value })
		setErrors((prev) => ({ ...prev, [e.target.name]: '' })) // Xóa lỗi khi người dùng đang sửa

		// Nếu đang sửa password thì kiểm tra lại confirm password
		if (e.target.name === 'password') {
			const confirmError = validateField('confirmpassword', input.confirmpassword)
			setErrors(prev => ({ ...prev, confirmpassword: confirmError }))
		}

	}

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newErrors = {
			email: validateField('email', input.email),
			password: validateField('password', input.password),
			phone: validateField('phone', input.phone),
			username: validateField('username', input.username),
			confirmpassword: validateField('confirmpassword', input.confirmpassword)
		}

		setErrors(newErrors)

		// Kiểm tra nếu có lỗi thì không submit
		if (Object.values(newErrors).some((err) => err)) return

		try {
			setLoading(true)
			// await your signup logic here
			console.log("Signup successfully with", input)
		} catch (error) {
			console.error('Signup error', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex items-center w-screen h-screen justify-center'>
			<form onSubmit={loginHandler} className='shadow-lg flex flex-col gap-5 p-10 w-[500px]'>
				<div className='my-4'>
					<h1 className='text-center font-bold text-xl'>Signup</h1>
				</div>

				<div>
					<span className='font-medium'>Email</span>
					<Input
						type='text'
						name='email'
						value={input.email}
						onChange={changeEventHandler}
						onBlur={handleBlur}
						className='focus-visible:ring-transparent w-full'
					/>
					{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
				</div>

				<div>
					<span className='font-medium'>Username</span>
					<Input
						type='text'
						name='username'
						value={input.username}
						onChange={changeEventHandler}
						onBlur={handleBlur}
						className='focus-visible:ring-transparent w-full'
					/>
					{errors.username && <p className='text-red-500 text-sm mt-1'>{errors.username}</p>}
				</div>

				<div>
					<span className='font-medium'>Phone</span>
					<Input
						type='tel'
						name='phone'
						value={input.phone}
						onChange={changeEventHandler}
						onBlur={handleBlur}
						className='focus-visible:ring-transparent w-full'
					/>
					{errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
				</div>

				<div>
					<span className='font-medium'>Password</span>
					<div className="relative">
						<Input
							type={showPassword ? 'text' : 'password'}
							name='password'
							value={input.password}
							onChange={changeEventHandler}
							onBlur={handleBlur}
							className='focus-visible:ring-transparent w-full pr-10'
						/>

						{input.password ? (
							<span
								className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-gray-500'
								onClick={() => setShowPassword(prev => !prev)}
							>
								{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</span>
						) : (
							<>
							</>
						)}
					</div>
					{errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
				</div>

				<div>
					<span className='font-medium'>Confirm Password</span>
					<div className="relative">
						<Input
							type={showConfirmPassword ? 'text' : 'password'}
							name='confirmpassword'
							value={input.confirmpassword}
							onBlur={handleBlur}
							onChange={changeEventHandler}
							className='focus-visible:ring-transparent w-full pr-10'
						/>
						{input.confirmpassword ? (
							<span
								className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-gray-500'
								onClick={() => setShowConfirmPassword(prev => !prev)}
							>
								{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</span>
						) : (
							<>
							</>
						)}
					</div>
					{errors.confirmpassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmpassword}</p>}
				</div>

				{loading ? (
					<Button disabled>
						<Loader2 className='mr-2 h-4 w-4 animate-spin' />
						Please wait
					</Button>
				) : (
					<Button type='submit'>Signup</Button>
				)}

				<span className='text-center text-sm'>
					Already have an account? <Link to='/login' className='text-blue-600'>Login</Link>
				</span>
			</form>
		</div>
	)
}

export default Signup
