import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'

const Login = () => {
	const [input, setInput] = useState({
		email: "",
		password: ""
	})

	const [showPassword, setShowPassword] = useState(false)

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	})

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

	}

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newErrors = {
			email: validateField('email', input.email),
			password: validateField('password', input.password),
		}

		setErrors(newErrors)

		// Kiểm tra nếu có lỗi thì không submit
		if (Object.values(newErrors).some((err) => err)) return

		try {
			console.log("Signup successfully with", input)
		} catch (error) {
			console.error('Signup error', error)
		}
	}

	return (
		<div className='flex items-center w-screen h-screen justify-center'>
			<form onSubmit={loginHandler} className='shadow-lg flex flex-col gap-5 p-10'>
				<div className='my-4'>
					<h1 className='text-center font-bold text-xl'>Login </h1>
				</div>
				<div>
					<span className="font-medium">Email</span>
					<Input
						type="text"
						name="email"
						value={input.email}
						onChange={changeEventHandler}
						onBlur={handleBlur}
						className="focus-visible:ring-transparent w-100"
					/>
					{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
				</div>
				<div>
					<span className="font-medium block">Password</span>
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

				<Button type="submit">Login</Button>

				<span className='text-center'>Does not have an account?  <Link to="/signup" className='text-blue-600'>Sign up</Link></span>
			</form>
		</div>
	)
}

export default Login
