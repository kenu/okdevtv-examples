from __future__ import print_function
x = 1
y = x + 9
print(y)

import tensorflow as tf
x2 = tf.constant(1, name="x")
y2 = tf.Variable(x + 9, name="y")
print(y2)

# model = tf.initialize_all_variables()
model = tf.global_variables_initializer()

with tf.Session() as session:
    session.run(model)
    print(session.run(y2))
