class SongsController < ApplicationController
  before_action :set_artist, :set_props
  before_action :set_song, only: [ :show, :edit, :update, :destroy ]

  def index
    @songs = Song.all
    if @songs.count == 0
      render component: "NoSongs", props: @props
    else
      render component: "Songs", props: @props
    end
  end

  def show
    render comoponent: "Song", props: @props
  end

  def new
    @song = @artist.songs.new
    render component: "NewSong", props: @props
  end

  def create
    @song = @artist.songs.new(song_params)

    if @song.save
      redirect_to [ @artist, @song ]
    else
      render component: "NewSong", props: @props
    end
  end

  def edit
    render component: "EditSong", props: @props
  end

  def update
    if @song.update(song_params)
      redirect_to [ @artist, @song ]
    else
      render component: "EditSong", props: @props
    end
  end

  def destroy
    @song.destroy
    redirect_to artist_path(@song)
  end

  private

    def set_props
      if Song.count == 0
        @props = { artist: @artist, songs: @songs }
      else
        @props = { artist: @artist, song: @song }
      end
    end


    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title)
    end
end
