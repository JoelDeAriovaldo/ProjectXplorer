import subprocess

# Executando subprocess.check_output via CMD para armazenar os dados dos perfis em "data"
data = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode('utf-8').split('\n')

# Armazenando e convertendo os perfis para uma lista
profiles = [i.split(":")[1][1:-1] for i in data if "All User Profile" in i]

# O loop for vai verificar e imprimir as redes WiFi e senhas disponíveis
for i in profiles:
    try:
        # Verificando a senha
        results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', i, 'key=clear']).decode('utf-8').split('\n')
        
        # Armazenando e convertendo as senhas para uma lista
        results = [b.split(":")[1][1:-1] for b in results if 'Key Content' in b]
        
        # Imprime a rede WiFi e a senha
        print("{:<30}| {:<}".format(i, results[0]))
    except IndexError:
        # Caso não haja senha, imprime apenas o nome da rede WiFi
        print("{:<30}| {:<}".format(i, ""))
