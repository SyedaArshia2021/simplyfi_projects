#!/bin/sh
if [curl"http://13.57.214.107:8082” | grep -x “Congratulations folks!!”];
  then 
   exit 0
else 
  exit 1
fi
