import random
import time
import os
import colorama
from colorama import Fore, Back, Style
size = 50  # Number of elements in the array
start = 1  # Start value for random range
end = 100  # End value for random range
time_delay = 0.1

def generate_random_array(size, start, end):
    arr = [random.randint(start, end) for _ in range(size)]
    return arr
clear = lambda: os.system('cls')


def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                # Visualize the swapping
                clear()
                print("BUBBLE SORT VISUALIZATION")
                print("-----------------------")
                for idx, element in enumerate(arr):
                    if idx == j+1:
                        print(Fore.RED + str(element) + Style.RESET_ALL, end=') ')
                    elif idx == j:
                        print("(",Fore.YELLOW + str(element) + Style.RESET_ALL, end=' ')
                    else:
                        print(element, end=' ')
                print("\n-----------------------")
                time.sleep(time_delay)  # Delay for visualization
    clear()
    return arr
# Initialize colorama
colorama.init()
random_array = generate_random_array(size, start, end)

s = bubble_sort(random_array)
print("BUBBLE SORT VISUALIZATION")
print("-----------------------")
for x in s:
  print(x , end=' ')
print("\n-----------------------")
# Deinitialize colorama
colorama.deinit()


