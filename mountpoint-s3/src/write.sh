#!/bin/bash

results_dir=results
timeout_seconds=30

rm -rf ${results_dir}
mkdir -p ${results_dir}

## sequential write
job_name="sequential_write"
dd if=/dev/zero of=${job_name}.dat bs=256k conv=fsync > ${results_dir}/${job_name}.txt 2>&1 &
# get the process ID
dd_pid=$!

sleep $timeout_seconds
# send USR1 signal to print the result
kill -USR1 ${dd_pid}
sleep 0.1
kill ${dd_pid}

throughput_value=$(awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt)
awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt
json_data="{\"name\":\"$job_name\",\"value\":$throughput_value,\"unit\":\"MiB/s\"}"
echo $json_data | jq '.' | tee ${results_dir}/${job_name}.json

# clean up the data file and the raw output file
rm ${job_name}.dat ${results_dir}/${job_name}.txt


## sequential write with direct IO
job_name="sequential_write_direct_io"
dd if=/dev/zero of=${job_name}.dat bs=256k oflag=direct conv=fsync > ${results_dir}/${job_name}.txt 2>&1 &
# get the process ID
dd_pid=$!

sleep $timeout_seconds
# send USR1 signal to print the result
kill -USR1 ${dd_pid}
sleep 0.1
kill ${dd_pid}

throughput_value=$(awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt)
awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt
json_data="{\"name\":\"$job_name\",\"value\":$throughput_value,\"unit\":\"MiB/s\"}"
echo $json_data | jq '.' | tee ${results_dir}/${job_name}.json

# clean up the data file and the raw output file
rm ${job_name}.dat ${results_dir}/${job_name}.txt
