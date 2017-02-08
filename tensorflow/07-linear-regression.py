import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf

number_of_points = 200
x_point = []
y_point = []

a = 0.22
b = 0.78

for i in range(number_of_points):
    x = np.random.normal(0.0, 0.5)
    y = a * x + np.random.normal(0.0, 0.1)
    x_point.append([x])
    y_point.append([y])

plt.plot(x_point, y_point, 'o', label='Input Data')
plt.legend()
plt.show()


A = tf.Variable(tf.random_uniform([1], -1.0, 1.0))
B = tf.Variable(tf.zeros([1]))
y = A * x_point + B
cost_function = tf.reduce_mean(tf.square(y - y_point))
optimizer = tf.train.GradientDescentOptimizer(0.5) #learning rate
train = optimizer.minimize(cost_function)

init = tf.global_variables_initializer()

with tf.Session() as sess:
    sess.run(init)
    for step in range(0, 21):
        sess.run(train)
        if (step % 5) == 0:
            plt.plot(x_point, y_point, 'o',\
                     label='step = {}'.format(step))
            plt.plot(x_point, sess.run(A) * x_point + sess.run(B))
            plt.legend()
            plt.show()
