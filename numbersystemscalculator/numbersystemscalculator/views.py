from django.http import JsonResponse

def convert_number(request, number, base):
    number_in_base_10 = int(number, base)
    return JsonResponse({
        'binary': bin(number_in_base_10)[2:],  # [2:] to remove '0b' prefix
        'octal': oct(number_in_base_10)[2:],  # [2:] to remove '0o' prefix
        'decimal': number_in_base_10,
        'hexadecimal': hex(number_in_base_10)[2:],  # [2:] to remove '0x' prefix
    })