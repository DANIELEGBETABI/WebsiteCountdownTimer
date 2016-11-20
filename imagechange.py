import shutil
from datetime import datetime
from os import listdir
from os.path import isfile, join
from random import randint

date = datetime.now()

src = "/var/www/html/timer/image/image.jpg"
dst = "/home/pi/Documents/TimerPhotos/Used/used " + str(date.strftime("%Y-%m-%d")) + ".jpg"
shutil.move(src, dst)


images = [f for f in listdir("/home/pi/Documents/TimerPhotos") if isfile(join("/home/pi/Documents/TimerPhotos", f))]


luckyImage = randint(1,len(images))

src = "/home/pi/Documents/TimerPhotos/" + images[luckyImage]
dst = "/var/www/html/timer/image/image.jpg"
shutil.move(src, dst)

print("Moved " + images[luckyImage])
