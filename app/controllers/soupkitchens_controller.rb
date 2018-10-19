class SoupkitchensController < ApplicationController
  before_action :set_soupkitchen, only: [:show, :update, :destroy]

  def index
    @soupkitchens = Soupkitchen.all
  end

  def new
    if logged_in?
      @soupkitchen = Soupkitchen.new
    else
      flash.now[:notice] = "You must be logged in to add a new soupkitchen."
    end 
  end

  def create 
   if logged_in? 
      @soupkitchen = Soupkitchen.new(soupkitchen_params)
      render json: @todo, status: 200

      if @soupkitchen.save
        flash[:notice] = "#{@soupkitchen.name} was successfully added to the Soupkitchens in list. Will you leave the first review?" 
        # redirect_to soupkitchen_path(@soupkitchen)
      else
        flash.now[:notice] = "Something went wrong"
        render :new
      end 
    end
  end


  def show
    @soupkitchen = Soupkitchen.find(params[:id])
    # json_response(@soupkitchen)
    render json: @soupkitchen, status: 200
  end

  def edit 
    @soupkitchen = Soupkitchen.find(params[:id])
  end

  def update
    # @soupkitchen = Soupkitchen.find(params[:id])
    @soupkitchen.update(soupkitchen_params)
    # head :no_content
    if @soupkitchen.save
      # redirect_to soupkitchen_path(@soup_kitchen), notice: "Changes to #{@soupkitchen.name} were successful." ADD JS 
    else 
      render :edit
    end 
  end 


  def destroy
    @soupkitchen.destroy
     # head :no_content
    # redirect_to @soupkitchens_path
  end 

 private
  def soupkitchen_params
    params.require(:soupkitchen).permit(:name, :address,:zipcode)
  end 

  def set_soupkitchen
    @soupkitchen = Soupkitchen.find(params[:id])
  end 


end
