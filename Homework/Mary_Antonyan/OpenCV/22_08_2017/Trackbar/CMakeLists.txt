project(Trackbar)
cmake_minimum_required(VERSION 2.8)
find_package(OpenCV REQUIRED)
add_executable(Trackbar main.cpp)
target_link_libraries(Trackbar ${OpenCV_LIBS})
