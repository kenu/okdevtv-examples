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
#    merged = tf.merge_all_summaries()
    merged = tf.summary.merge_all()
#    writer = tf.train.SummaryWriter("/tmp/tensorflowlog", session.graph)
    writer = tf.summary.FileWriter("/tmp/tensorflowlog", session.graph)
    session.run(model)
    print(session.run(y2))
