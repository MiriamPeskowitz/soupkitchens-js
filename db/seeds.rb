# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# soupkitchen = Soupkitchen.create(name: 'Philly Restart', address: "19th St and Vine St", zipcode: 19103)

# soupkitchen = Soupkitchen.create(name: 'Second Pilgrim Baptist Church', address: "554 N. 15th St", zipcode: 19130)

# soupkitchen = Soupkitchen.create(name: 'Face to Face Germantown', address: "109 E. Price St", zipcode: 19114)

# soupkitchen = Soupkitchen.create(name: 'Iglesia Cristiana Avivamiento', address: "541 E. Cambria St", zipcode: 19134)

# soupkitchen = Soupkitchen.create(name: 'Sunday Breakfast Rescue Mission', address: '302 N. 13th St', zipcode: 19107)

# soupkitchen = Soupkitchen.create(name: 'St. Marks', address: '1625 Locust St', zipcode: 19103 )

# soupkitchen = Soupkitchen.create(name: 'Broad Street Ministry', address: '315 South Broad Street', zipcode: 19107 )

# soupkitchen = Soupkitchen.create(name: 'Lombard Central Presbyterian Church', address: '4201 Powelton Ave', zipcode: 19104 )

# soupkitchen = Soupkitchen.create(name: 'Anchor of Hope', address: '53 E.Wister Street', zipcode: 19144 )

# soupkitchen = Soupkitchen.create(name: 'Bethel Presbyterian', address: '53 E.Wister Street', zipcode: 19144 )

# soupkitchen = Soupkitchen.create(name: 'Provision of Grace World Mission Church', address: '1950 W. Rockland St', zipcode: 19141 )

comment = Comment.create(title: "Really Good Breakfast", content: "Hot breakfast, plus some takehome supplies",id: 1, soupkitchen_id: 1, user_id: 1)

comment = Comment.create(title: "Liked the lunch", content: "burgers and good veggies, nice people", id: 2, soupkitchen_id: 2, user_id: 1)


user = User.create(first_name: "SD", last_name: "Rogers", email: "sd@mail.com")
