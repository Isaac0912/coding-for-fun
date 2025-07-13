#a basic calculator using variables, if and elses:

number_a = int(input('Digit a number: '))
math_operator = int(input('Choose an math operator: 1)Plus  2)Minus  3)Division  4)Multiplication  5)Exponentiation :  '))
number_b = int(input('Digit another number: '))

if math_operator == 1:
	answer = number_a + number_b
elif math_operator == 2:
	answer = number_a - number_b
elif math_operator == 3:
	answer = number_a / number_b
elif math_operator == 4:
	answer = number_a * number_b
elif math_operator == 5:
	answer = number_a ** number_b

print(answer)

additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))

while additional == 1:
	math_operator2 = int(input('Choose an math operator: 1)Plus  2)Minus  3)Division  4)Multiplication  5)Exponentiation :  '))
	number_c = int(input('Digit another number: '))
	if math_operator2 == 1:
		answer = answer + number_c
		print(answer)
		additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))
	elif math_operator2 == 2:
		answer = answer - number_c
		print(answer)
		additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))
	elif math_operator2 == 3:
		answer = answer / number_c
		print(answer)
		additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))
	elif math_operator2 == 4:
		answer = answer * number_c
		print(answer)
		additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))
	elif math_operator2 == 5:
		answer = answer ** number_c
		print(answer)
		additional = int(input("Want add more number in the operator?  yes = 1  no = 2"))
	else:
		print('An error ocurred or Wrong input.')

if additional == 2:
	print('your result is ' + answer)

