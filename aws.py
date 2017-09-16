import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from skimage.measure import compare_ssim as ssim
from skimage import io
from skimage.transform import rescale, resize, downscale_local_mean

def get_biggest_size(x, y):
    if (x.shape[0] * x.shape[1] > y.shape[0] * y.shape[1]):
        return (x.shape[0], x.shape[1])
    else:
        return (y.shape[0], y.shape[1])

# num_img_to_process = 402
num_img_to_process = 5
a = np.ones((num_img_to_process, num_img_to_process))

for row in range(0, num_img_to_process):
    for col in range(0, num_img_to_process):
        im1 = io.imread('img/' + str(col + 2) + '.jpg')
        im2 = io.imread('img/' + str(row + 2) + '.jpg')
        im1r = resize(im1, (get_biggest_size(im1, im2)[0], get_biggest_size(im1, im2)[1], 3), mode='reflect')
        im2r = resize(im2, (get_biggest_size(im1, im2)[0], get_biggest_size(im1, im2)[1]), 3, mode='reflect')
        if (col > row):
            val = ssim(im1r, im2r, multichannel=True)
            a[row, col] = val
            a[col, row] = val
        print(row, col, 'OK')

np.save('awstest', a)
print('done')