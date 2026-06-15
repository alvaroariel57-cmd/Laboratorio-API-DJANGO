import requests
from django.shortcuts import render

def usuarios(request):
    response = requests.get(
        "http://api:3000/api/usuarios"
    )

    data = response.json()

    return render(
        request,
        "usuarios.html",
        {"usuarios": data}
    )